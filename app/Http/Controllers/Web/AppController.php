<?php
/**
 * Created by PhpStorm.
 * User: YG
 * Date: 2018/10/29
 * Time: 6:50 PM
 */

namespace App\Http\Controllers\Web;
use App\Http\Controllers\Controller;

class AppController extends Controller
{
    public function getApp()
    {
        return view('app');
    }

    public function getLogin()
    {
        return view('login');
    }
}