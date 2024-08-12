<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index(){
        return Inertia::render('Index');
    }

    public function object($id) {
        $object = ['id'=>$id];
        return Inertia::render('Object', [
            'title'=>'Object',
            'id' => $id,
            'object' => $object,
        ]);
    }

    public function catalog($id) {
        $catalog = ['id'=>$id];
        return Inertia::render('Catalog', [
            'title'=>'Catalog',
            'id' => $id,
            'catalog' => $catalog,
        ]);
    }
}
