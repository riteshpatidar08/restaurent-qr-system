import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    unique: true,  //order collection 4 order.countDocumnets() + 5
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }, // client => localStorage => req.body //req.user.id
  sessionToken: {
    type: String,
  }, //client => localStorage => req.body 
  items: [  
    {
      menuItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
      },
      name: {
        type: String,
      },
      price: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
      subTotal: {
        type: Number,
        required: true,
      },
    },
  ],  //client or db using db ;
  subTotal: {
    type: Number,
  }, //db 
  discountAmount: {
    type: Number,
  },  //client ya db
  coupanCode: {
    type: String,
}, //client
  finalAmount: {
    type: Number,
  }, //client 
  tableNumber: {
    type: Number,
  },//client
  customerEmail: {
    type: String,
  }, //client
  customerName: {
    type: String,
  }, //clinet
  customerPhone : {
    type : String
  },
  notes: {
    type: String,
  }, //client
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
 

//NOTE paymentid , method => cash , upi  
//NOTE order status => pending , confirmed , preprating read y



//login => userId => menu => menuId => cart => cartId => order