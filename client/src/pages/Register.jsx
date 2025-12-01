import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, UserPlus, ArrowRight, UtensilsCrossed, Gift, Award, Percent, Sparkles } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/authSlice';

const Register = () => {
 const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
   
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted (UI only):', formData);
    dispatch(register(formData))
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
   
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

     
      <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
    
          <div className="w-full">
        
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-gray-200" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">SavoryBites</h2>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Restaurant Management</p>
                </div>
              </div>
            </div>

          
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
              <p className="text-gray-400 text-xs">
                Join us and start earning rewards today
              </p>
            </div>

       
            <form onSubmit={handleSubmit} className="space-y-4">
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-xs font-medium text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-200 text-sm"
                      placeholder="ritesh patidar"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-200 text-sm"
                      placeholder="riteshpatidar088@gmail.com"
                    />
                  </div>
                </div>
              </div>

            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-200 text-sm"
                      placeholder="1234567890"
                      maxLength="15"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-200 text-sm"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Min. 6 characters</p>
                </div>
              </div>

         
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-200 text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

             
              <div className="flex items-start pt-1">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 bg-gray-900/50 border-gray-700 rounded focus:ring-2 focus:ring-gray-600"
                />
                <label htmlFor="terms" className="ml-2 text-xs text-gray-400">
                  I agree to the{' '}
                  <a href="#" className="text-white/80 hover:text-white">Terms</a> and{' '}
                  <a href="#" className="text-white/80 hover:text-white">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <UserPlus className="w-5 h-5" />
                <span>Create Account</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-white font-medium hover:text-gray-300 inline-flex items-center gap-1">
                  Sign in <ArrowRight className="w-4 h-4" />
                </Link>
              </p>
            </div>
          </div>

       
          <div className="w-full space-y-8">
          
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-gray-400" />
                <h3 className="text-lg font-bold text-gray-100">New Member Benefits</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-100 font-semibold text-sm">20% Welcome Discount</span>
                </div>
                <p className="text-gray-400 text-xs ml-6">Get 20% off on your first order</p>
              </div>
            </div>

           
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-gray-400" />
                <h3 className="text-lg font-bold text-gray-100">Loyalty Points Program</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-100 font-semibold text-sm">Earn Points</span>
                    <span className="text-gray-300 font-bold text-sm">1 Point = ₹1</span>
                  </div>
                  <p className="text-gray-500 text-xs">Earn 1 point for every ₹1 you spend</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-100 font-semibold text-sm">Redeem Points</span>
                    <span className="text-gray-300 font-bold text-sm">100 Points = ₹10</span>
                  </div>
                  <p className="text-gray-500 text-xs">Use points to get discounts on future orders</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-100 font-semibold text-sm">Bonus Points</span>
                    <span className="text-gray-300 font-bold text-sm">+50 Points</span>
                  </div>
                  <p className="text-gray-500 text-xs">Get 50 bonus points on registration</p>
                </div>
              </div>
            </div>
  {/* Membership Tiers */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Percent className="w-6 h-6 text-gray-400" />
                <h3 className="text-lg font-bold text-gray-100">Membership Tiers</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-100 font-semibold text-sm">Bronze Member</span>
                    <span className="text-gray-400 text-xs">0-500 Points</span>
                  </div>
                  <p className="text-gray-500 text-[10px]">5% discount on all orders</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-100 font-semibold text-sm">Silver Member</span>
                    <span className="text-gray-400 text-xs">501-2000 Points</span>
                  </div>
                  <p className="text-gray-500 text-[10px]">10% discount + Priority support</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-100 font-semibold text-sm">Gold Member</span>
                    <span className="text-gray-400 text-xs">2000+ Points</span>
                  </div>
                  <p className="text-gray-500 text-[10px]">15% discount + Exclusive offers</p>
                </div>
              </div>
            </div>

        
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5">
              <h4 className="text-base font-semibold text-gray-100 mb-2">Additional Benefits</h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  Birthday special offers and discounts
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  Early access to new menu items
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  Free delivery on orders above ₹500
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  Exclusive member-only events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
