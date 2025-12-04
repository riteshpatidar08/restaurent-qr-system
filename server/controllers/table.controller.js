import crypto from 'crypto';
import QRCode from 'qrcode'; // FIXED IMPORT
import Table from '../models/table.js';

export const createTable = async (req, res) => {
  try {
    const { tableNumber, capacity } = req.body;

    // Generate QR slug
    const qrSlug = crypto.randomBytes(6).toString('hex');

    // Generate QR scanning URL
    const qrCodeURL = `http://localhost:5173/scan-qr?qr=${qrSlug}`;

    // Generate QR image (Data URL)
    QRCode.toDataURL(qrCodeURL, async (err, url) => {
      console.log(url);
      const qrImage = url;
      const table = new Table({
        tableNumber,
        capacity,
        qrImage,
        qrCodeURL,
        qrSlug,
      });

      await table.save();

      res.status(201).json({
        success: true,
        data: table,
      });
    });

    // Save table
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get table by slug ;
// http://localhost:3000/table/qr/:slug
export const getTableBySlug = async(req,res, next) => {
  try {
    //params //query params //req.body ;
    const {slug}  = req.params  ;
    console.log(typeof slug)
    const filterObject = {qrSlug : slug , isActive : true} ;
    console.log(filterObject) ;

    const table = await Table.findOne({qrSlug : slug , isActive : true})
    console.log(table)
    if(!table){
       const error = new Error('No Table found with this slug');
       error.status = 404 ;
       throw error
    }
res.status(200).json({
  success : true ,
  data : table
})
  } catch (error) {
   next(error)
  }
}

//GLOBAL ERROR HANDLER ? 

//middleware route pehle
//route k baad aur controller se pehle 

//last controller => error aaya => catch block => next(error) => middleware(globalerror handler) => (err,res,req,next)=> {
  