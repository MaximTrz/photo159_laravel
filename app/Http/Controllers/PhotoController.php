<?php

namespace App\Http\Controllers;

use App\Models\Material;
use App\Models\Order;
use App\Models\Photo;
use App\Models\Size;
use Illuminate\Http\Request;
use ZipArchive;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('photo'))
        {
            $file = $request->file('photo');
            $photo = new Photo();

            if (!$request->has('order_id'))
            {

                $order = new Order();
                $order->name = $request->input('name');
                $order->surname = $request->input('surname');
                $order->email = $request->input('email');
                $order->phone = $request->input('phone');
                $order->delivery_type = $request->input('delivery_type');
                $order->pay_type = $request->input('pay_type');
                $order->delivery_adress	= $request->input('delivery_adress');
                $order->status = 1;
                $order->wasOpened = 0;
                $order->save();
                $order_id = $order->id;
            } else {
                $order_id = $request->input('order_id');
                $order = Order::find($order_id);
            }
        }


        $photo->size_id = $request->input('size_id');
        $photo->material_id = $request->input('material_id');
        $photo->amount = $request->input('amount');

        //$photo->margin_id = $request->input('margin_id');
        $photo->order_id = $order_id;
        $photo->file_name = "test";

        $photo->save();

        $size = Size::find($photo->size_id);
        $size_title = "{$size->width}X{$size->height}";
        $material = Material::find($photo->material_id);

        $zip = new ZipArchive;
        $zipPath = storage_path("app/public/uploads/{$order_id}.zip");
        if ($zip->open($zipPath, ZipArchive::CREATE) === true)
        {
            $fileNameInArchive = 'размер_'.$size_title.'_материал_'.$material->name.'_'.'id_'.$photo->id.'_'.$file->getClientOriginalName();
            $pathInArchive = 'photos/' . $fileNameInArchive;
            $zip->addFile($file->path(), $pathInArchive);
            $zip->close();
        }

        if($request->has('last_photo'))
        {
            $order->status = 2;
            $order->save();
        }

        return response()->json(['message' => 'Запись успешно сохранена', 'photo_id' => $photo->id, 'order_id' => $order->id,], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Photo $photo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Photo $photo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Photo $photo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Photo $photo)
    {
        //
    }
}