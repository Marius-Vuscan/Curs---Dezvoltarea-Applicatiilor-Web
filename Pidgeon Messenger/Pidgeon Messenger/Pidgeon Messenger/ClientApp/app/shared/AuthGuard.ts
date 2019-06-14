﻿import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {

    }

    canActivate(){
        var token = sessionStorage.getItem("token");

        if (token) {
            return true;
        }

        this.router.navigate(["login"]);

        return false;
    }
}