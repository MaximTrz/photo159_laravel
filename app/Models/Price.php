<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;
    public function priceType()
    {
        return $this->belongsTo(PriceType::class);
    }
    public function size()
    {
        return $this->belongsTo(Size::class);
    }
    public function material()
    {
        return $this->belongsTo(Material::class);
    }
}
