<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['product_name', 'category_name', 'stock', 'price', 'quantity_sold'];

    public function sales()
    {
        return $this->hasMany(Sale::class, 'product_id');
    }

    public function inventory(){
        return $this->hasOne(Inventory::class, 'product_id');
    }
}
