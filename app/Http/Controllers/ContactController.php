<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Service;
use Illuminate\Http\Request;
use Parsedown;

class ContactController extends Controller
{
    public function index()
    {
        $parsedown = new Parsedown();

        $contacts = Contact::all();

        foreach ($contacts as $item) {
            $item->text = $parsedown->text($item->text);
        }

        return response()->json($contacts, 200, [], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }
}
