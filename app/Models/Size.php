<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;
    public function prices()
    {
        return $this->hasMany(Price::class);
    }

    public function sizeType()
    {
        return $this->belongsTo(SizeType::class);
    }

}
