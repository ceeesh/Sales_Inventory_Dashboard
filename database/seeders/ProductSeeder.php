<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'id' => 1,
                'product_name' => 'White Polo Shirt',
                'category_name' => 'Shirt',
                'price' => 670,
                'quantity_sold' => 3,
                'stock' => 20
            ],
            [
                'id' => 2,
                'product_name' => 'Straight Cut Slacks',
                'category_name' => 'Slacks',
                'price' => 1200,
                'quantity_sold' => 2,
                'stock' => 64
            ],
            [
                'id' => 3,
                'product_name' => 'Black Denim Jacket',
                'category_name' => 'Jacket',
                'price' => 1500,
                'quantity_sold' => 1,
                'stock' => 73
            ],
           
        ];



        foreach ($products as $product) {
            Product::create($product);
        };
    }
}
