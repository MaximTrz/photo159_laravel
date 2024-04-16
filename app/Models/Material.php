<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;
    public function prices()
    {
        return $this->hasMany(Price::class);
    }

    public function materialType()
    {
        return $this->belongsTo(MaterialType::class);
    }

}
