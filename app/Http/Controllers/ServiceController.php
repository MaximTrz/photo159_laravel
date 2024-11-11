<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Parsedown;

class ServiceController extends Controller
{
    public function index()
    {
        $parsedown = new Parsedown();

        $services = Service::all();

        foreach ($services as $item) {
            $item->description = $parsedown->text($item->description);

            if ($item->image) {
                $item->image = url('storage/' . $item->image);
            }

        }

        return response()->json($services, 200, [], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }

}
