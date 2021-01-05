import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './user/Login'
import Register from './user/Register'

import Home from './Pages/Home'
import Forgot_password from './user/Forgot_password'
import Overview from './Pages/Overview'
import Investment from './Pages/Investment'
import Savings from './Pages/Savings'
import Loan from './Pages/Loan'
import Transaction from './Pages/Transaction'
import Account from './Pages/Account'
import PrivateRoute from './auth/PrivateRoute'
import PageNotFound from './Pages/PageNotFound'
import AdminRoute from './auth/AdminRoute'
import AdminOverview from './AdminPages/AdminOverview'
import AddCategory from './AdminPages/AddCategory'
import Orders from './AdminPages/Orders'
import AddProduct from './AdminPages/AddProduct'
import GetAllCategories from './AdminPages/GetAllCategories'
import GetAllProducts from './AdminPages/GetAllProducts'
import InvestmentShop from './Pages/InvestmentShop'
import ProductDetail from './Pages/ProductDetail'
import ReviewPlan from './Pages/ReviewPlan'
import UpdateProduct from './AdminPages/UpdateProduct'
import ViewProduct from './AdminPages/ViewProduct'
import AllUsers from './AdminPages/AllUsers'
import UserProfile from './AdminPages/UserProfile'
import OrderDetail from './AdminPages/OrderDetail'
import PaymentSuccessful from './Pages/PaymentSuccessful'
import TransactionDetail from './Pages/TransactionDetail'





const Routes =()=>{
  return(    
    <BrowserRouter>
     
        <Switch>
            <Route  exact path="/" component={Home} />
            <Route  exact path="/login" component={Login} />
            <Route   exact path="/register" component={Register} />
            <Route   exact path="/password-reset" component={Forgot_password} />
            <PrivateRoute   exact path="/dashboard" component={Overview} />
            <PrivateRoute   exact path="/dashboard/invest" component={InvestmentShop} />
            <PrivateRoute   exact path="/dashboard/overview" component={Overview} />
            <PrivateRoute   exact path="/dashboard/my-investment" component={Investment} />
            <PrivateRoute   exact path="/dashboard/invest/:productId" component={ProductDetail} />
            <PrivateRoute   exact path="/dashboard/save" component={Savings} />
            <PrivateRoute   exact path="/dashboard/loan" component={Loan} />
            <PrivateRoute   exact path="/dashboard/payment-successful" component={PaymentSuccessful} />
            <PrivateRoute   exact path="/dashboard/review" component={ReviewPlan} />  
            <PrivateRoute   exact path="/dashboard/transaction" component={Transaction} />
            <PrivateRoute exact path="/dashboard/transaction/:orderId" component={TransactionDetail} />
            <PrivateRoute exact path="/dashboard/account/:userId" component={Account} />
            <AdminRoute exact path="/dashboard/admin/add-category" component={AddCategory} />
            <AdminRoute exact path="/dashboard/admin/investment" component={GetAllProducts} />
            <AdminRoute exact path="/dashboard/admin/user-account/:userId" component={UserProfile} />
            <AdminRoute exact path="/dashboard/admin/orders" component={Orders} />
            
            <AdminRoute exact path="/dashboard/admin/users" component={AllUsers} />
            <AdminRoute exact path="/dashboard/admin/order/detail/:orderId" component={OrderDetail} />
            <AdminRoute exact path="/dashboard/admin/add-investment-plan" component={AddProduct} />
            <AdminRoute exact path="/dashboard/admin/categories" component={GetAllCategories} />
            <AdminRoute exact path="/dashboard/admin/investment/:productId" component={UpdateProduct} />
            <AdminRoute exact path="/dashboard/admin/investment/view/:productId" component={ViewProduct} />
            <AdminRoute exact path="/dashboard/admin/overview" component={AdminOverview} />
            <AdminRoute exact path="/dashboard/admin-overview" component={AdminOverview} />

            <Route path='*' exact={true} component={PageNotFound} />
          
           
       </Switch>
    </BrowserRouter>
  )
}


export default Routes

// BrowserRouter  uses the HTML5 history API to keep track of routes history in the React app