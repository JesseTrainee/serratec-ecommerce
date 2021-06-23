import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/home';
import Carrinho from './pages/cart/Carrinho';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {Home} />
            {/* <Route exact path="/produto" component= {ProductScreen} />
            <Route path="/detalhes/:nome" component= {Details} /> */}
            <Route path="/carrinho" component= {Carrinho} />
            {/* <Route path="/produto/cadastro" component= {ProductRegister} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;