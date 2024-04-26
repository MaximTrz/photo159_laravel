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

        $baseSizes = Size::where('size_type_id', MAIN_SIZE_ID)->orderBy('sort_order')->get();

        $baseMaterials = Material::where('material_type_id', MAIN_MATERIAL_ID)->orderBy('sort_order')->get();

        $souvenirSizes = Size::where('size_type_id', SOUVENIR_SIZE_ID)->orderBy('sort_order')->get();
        $souvenirMaterials = Material::where('material_type_id', SOUVENIR_SIZE_ID)->orderBy('sort_order')->get();

        $res = ["prices"=>$prices,
                "baseSizes"=>$baseSizes,
                "baseMaterials" => $baseMaterials,
                "souvenirSizes" => $souvenirSizes,
                "souvenirMaterials" => $souvenirMaterials];

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
