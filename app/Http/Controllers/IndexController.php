<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index(){
        return Inertia::render('Index');
    }

    public function news(){
        return Inertia::render('News');
    }

    public function favorite(){
        return Inertia::render('Favorite');
    }

    public function newsItem($id){
        $object = ['id'=>$id, 'title' => 'Новость'.$id];
        return Inertia::render('NewsItem', [
            'id' => $id,
            'object' => $object,
        ]);
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
