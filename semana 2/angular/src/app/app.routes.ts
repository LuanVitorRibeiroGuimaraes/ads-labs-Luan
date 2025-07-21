import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ErrorPageComponentComponent } from './components/error-page-component/error-page-component.component';
import { ClientePageComponentComponent } from './components/cliente-page-component/cliente-page-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { RegisterUserComponentComponent } from './components/register-user-component/register-user-component.component';
import { OrderComponentComponent } from './components/order-component/order-component.component';
import { ManageRestaurantComponentComponent } from './components/manage-restaurant-component/manage-restaurant-component.component';
import { SeeOrderComponentComponent } from './components/see-order-component/see-order-component.component';
import { UserDataComponentComponent } from './components/user-data-component/user-data-component.component';
import { ManageUserComponentComponent } from './components/manage-user-component/manage-user-component.component';
import { DeleteUserComponentComponent } from './components/delete-user-component/delete-user-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RestaurantePageComponentComponent } from './components/restaurante-page-component/restaurante-page-component.component';
import { RestauranteDataComponentComponent } from './components/restaurante-data-component/restaurante-data-component.component';
import { PrMaisPedidosComponentComponent } from './components/pr-mais-pedidos-component/pr-mais-pedidos-component.component';
import { ClienteMaisPedidosComponentComponent } from './components/cliente-mais-pedidos-component/cliente-mais-pedidos-component.component';
import { ClienteMaisGastaramComponentComponent } from './components/cliente-mais-gastaram-component/cliente-mais-gastaram-component.component';

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
        path: '**',
        component: ErrorPageComponentComponent,
    },

];
