<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Margin;
use App\Models\Material;
use App\Models\Price;
use App\Models\Size;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function index()
    {
        $faq = Faq::all();
        return response()->json($faq, 200, [], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

    }
}
