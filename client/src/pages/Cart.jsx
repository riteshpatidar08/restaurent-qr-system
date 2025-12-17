import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';


const staticCartData = {
  userId: '507f1f77bcf86cd799439011',
  items: [
    {
      menuItemId: '507f1f77bcf86cd799439012',
      quantity: 2,
      menuItem: {
        _id: '507f1f77bcf86cd799439012',
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese cubes grilled to perfection with spices',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
        price: 280,
        category: 'Main Course',
        isAvailable: true,
      },
    },
    {
      menuItemId: '507f1f77bcf86cd799439013',
      quantity: 1,
      menuItem: {
        _id: '507f1f77bcf86cd799439013',
        name: 'Dal Makhani',
        description: 'Creamy black lentils cooked with butter and spices',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
        price: 220,
        category: 'Main Course',
        isAvailable: true,
      },
    },
    {
      menuItemId: '507f1f77bcf86cd799439014',
      quantity: 3,
      menuItem: {
        _id: '507f1f77bcf86cd799439014',
        name: 'Garlic Naan',
        description: 'Soft bread with garlic and butter',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
        price: 60,
        category: 'Breads & Rotis',
        isAvailable: true,
      },
    },
    {
      menuItemId: '507f1f77bcf86cd799439015',
      quantity: 1,
      menuItem: {
        _id: '507f1f77bcf86cd799439015',
        name: 'Mango Lassi',
        description: 'Refreshing yogurt drink with mango',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
        price: 120,
        category: 'Beverages',
        isAvailable: true,
      },
    },
  ],
  totalCartPrice: 1100,
};

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(staticCartData.items);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.menuItem.price;
    }, 0);
  }, [cartItems]);


  const updateQuantity = (itemId, change) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.menuItemId === itemId) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };


  const removeItem = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.menuItemId !== itemId);
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
        <p className="text-gray-400 mb-6">Add some delicious items to get started!</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
    
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Shopping Cart</h1>
        <p className="text-gray-400">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
     
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.menuItemId}
              className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row">
           
                <div className="relative w-full sm:w-40 md:w-48 h-40 sm:h-40 shrink-0">
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                    }}
                  />
                  {!item.menuItem.isAvailable && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Unavailable
                    </div>
                  )}
                </div>

           
                <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between min-w-0">
               
                  <div className="mb-4 shrink-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white shrink-0">{item.menuItem.name}</h3>
                      <span className="text-xl font-bold text-white whitespace-nowrap">₹{item.menuItem.price}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-2 leading-relaxed">{item.menuItem.description}</p>
                    <span className="inline-block text-xs text-gray-400 uppercase tracking-wider bg-gray-800/70 border border-gray-700/50 px-3 py-1.5 rounded-md">
                      {item.menuItem.category}
                    </span>
                  </div>

               
                  <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-gray-800">
                   
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.menuItemId, -1)}
                          className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 text-white font-medium min-w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.menuItemId, 1)}
                          className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Subtotal</p>
                        <p className="text-lg font-bold text-white">₹{item.quantity * item.menuItem.price}</p>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.menuItemId)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Delivery Charges</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax (GST)</span>
                <span>₹{Math.round(totalPrice * 0.18)}</span>
              </div>
              <div className="border-t border-gray-800 pt-4 flex justify-between">
                <span className="text-lg font-semibold text-white">Total</span>
                <span className="text-lg font-bold text-white">₹{totalPrice + Math.round(totalPrice * 0.18)}</span>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors mb-4">
              Proceed to Checkout
            </button>

            <button 
              onClick={() => navigate('/')}
              className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-lg font-medium hover:bg-gray-800/70 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
