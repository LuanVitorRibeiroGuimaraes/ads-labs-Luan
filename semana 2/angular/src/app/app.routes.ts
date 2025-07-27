import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ErrorPageComponentComponent } from './components/utils/error-page-component/error-page-component.component';
import { HeaderComponentComponent } from './components/utils/header-component/header-component.component';
import { FooterComponentComponent } from './components/utils/footer-component/footer-component.component';
import { RegisterUserComponentComponent } from './components/clientes/register-user-component/register-user-component.component';
import { ManageUserComponentComponent } from './components/clientes/manage-user-component/manage-user-component.component';
import { DeleteUserComponentComponent } from './components/clientes/delete-user-component/delete-user-component.component';
import { HomeComponentComponent } from './components/utils/home-component/home-component.component';
import { RestauranteDataComponentComponent } from './components/restaurante/restaurante-data-component/restaurante-data-component.component';
import { PrMaisPedidosComponentComponent } from './components/restaurante/pr-mais-pedidos-component/pr-mais-pedidos-component.component';
import { ClienteMaisPedidosComponentComponent } from './components/restaurante/cliente-mais-pedidos-component/cliente-mais-pedidos-component.component';
import { ClienteMaisGastaramComponentComponent } from './components/restaurante/cliente-mais-gastaram-component/cliente-mais-gastaram-component.component';
import { UserDataComponentComponent } from './components/clientes/user-data-component/user-data-component.component';
import { SeeOrderComponentComponent } from './components/clientes/see-order-component/see-order-component.component';
import { ManageRestaurantComponentComponent } from './components/restaurante/manage-restaurant-component/manage-restaurant-component.component';
import { OrderComponentComponent } from './components/clientes/order-component/order-component.component';
import { ClientePageComponentComponent } from './components/utils/cliente-page-component/cliente-page-component.component';
import { DeletarPedidoComponentComponent } from './components/clientes/deletar-pedido-component/deletar-pedido-component.component';
import { CriarPratoComponentComponent } from './components/restaurante/criar-prato-component/criar-prato-component.component';
import { RestaurantePageComponentComponent } from './components/utils/restaurante-page-component/restaurante-page-component.component';
import { AtualizarPratoComponentComponent } from './components/restaurante/atualizar-prato-component/atualizar-prato-component.component';
import { DeletarPratoComponentComponent } from './components/restaurante/deletar-prato-component/deletar-prato-component.component';
import { ConsultarPratoComponentComponent } from './components/restaurante/consultar-prato-component/consultar-prato-component.component';
import { ConsultarClienteComponentComponent } from './components/clientes/consultar-cliente-component/consultar-cliente-component.component';
import { ConsultarTodosPratoComponentComponent } from './components/restaurante/consultar-todos-prato-component/consultar-todos-prato-component.component';
import { RelatoriosComponentComponent } from './components/restaurante/relatorios-component/relatorios-component.component';
import { AtualizarPedidoComponentComponent } from './components/clientes/atualizar-pedido-component/atualizar-pedido-component.component';
import { ConsultarEspecificoPedidoComponentComponent } from './components/clientes/consultar-especifico-pedido-component/consultar-especifico-pedido-component.component';

export const routes: Routes = [

    {
      path: 'home',
      component: HomeComponentComponent,
    },

    {
        path: 'error',
        component: ErrorPageComponentComponent,
    },

    {
        path: 'cliente',
        component: ClientePageComponentComponent,
    },

    {
      path: 'restaurante',
      component: RestaurantePageComponentComponent,
    },

    {
      path: 'clientesMaisPedidos',
      component: ClienteMaisPedidosComponentComponent,
    },

    {
      path: 'clientesMaisGastos',
      component: ClienteMaisGastaramComponentComponent,
    },

    {
      path: 'pratosMaisPedidos',
      component: PrMaisPedidosComponentComponent,
    },

    {
        path: 'footer',
        component: FooterComponentComponent,
    },

    {
        path: 'header',
        component: HeaderComponentComponent,
    },

    {
        path: 'fazerPedido',
        component: OrderComponentComponent,
    },

    {
      path: 'registrar',
      component: RegisterUserComponentComponent,
    },

    {
      path: 'order',
      component: OrderComponentComponent,
    },

    {
      path: 'manageRestaurante',
      component: ManageRestaurantComponentComponent,
    },

    {
      path: 'verPedidos',
      component: SeeOrderComponentComponent,
    },

    {
      path: 'userData',
      component: UserDataComponentComponent,
    },

    {
      path: 'restauranteData',
      component: RestauranteDataComponentComponent,
    },

    {
      path: 'manageUser',
      component: ManageUserComponentComponent,
    },

    {
      path: 'deleteUser',
      component: DeleteUserComponentComponent,
    },

    {
      path: 'deleteOrder',
      component: DeletarPedidoComponentComponent,
    },

    {
      path: 'criarPrato',
      component: CriarPratoComponentComponent,
    },

    {
      path: 'atualizarPrato',
      component: AtualizarPratoComponentComponent,
    },

    {
      path: 'deletarPrato',
      component: DeletarPratoComponentComponent,
    },

    {
      path: 'consultarPrato',   
      component: ConsultarPratoComponentComponent,
    },

    {
      path: 'consultarCliente',
      component: ConsultarClienteComponentComponent,
    },

    {
      path: 'consultarTodosPratos',
      component: ConsultarTodosPratoComponentComponent,
    },

    {
      path: 'relatorios',
      component: RelatoriosComponentComponent,
    },

    {
      path: 'editarPedido',
      component: AtualizarPedidoComponentComponent,
    },

    {
      path: 'consultarPedidosEspecificos',
      component: ConsultarEspecificoPedidoComponentComponent,
    },

    {
        path: '**',
        component: ErrorPageComponentComponent,
    },

];
