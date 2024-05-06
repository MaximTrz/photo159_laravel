<?php

namespace App\Http\Controllers;

use App\Models\Material;
use App\Models\Price;
use App\Models\Size;
use Illuminate\Http\Request;

const MAIN_MATERIAL_ID = 1;
const SOUVENIR_MATERIAL_ID = 2;

const MAIN_SIZE_ID = 1;
const SOUVENIR_SIZE_ID = 2;

class Prices extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prices = Price::with('size', 'material')->get();

        $sizes = Size::orderBy('sort_order')->get();

        $materials = Material::orderBy('sort_order')->get();



        $res = ["prices"=>$prices,
                "sizes"=>$sizes,
                "materials" => $materials,];

        return response()->json($res, 200, [], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

    }

    /**
     * Display the specified resource.
     */
    public function show(Price $price)
    {
        //
    }

}
