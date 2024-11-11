<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Margin;
use App\Models\Material;
use App\Models\Price;
use App\Models\Size;
use Illuminate\Http\Request;

use Parsedown;

class FaqController extends Controller
{
    public function index()
    {
        $faqItems = Faq::all();
        $parsedown = new Parsedown();

        foreach ($faqItems as $item) {
            $item->answer = $parsedown->text($item->answer);
        }

        return response()->json($faqItems, 200, [], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }
}
