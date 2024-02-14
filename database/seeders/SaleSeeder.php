<?php

namespace Database\Seeders;

use App\Models\Sale;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sales = [
            [
                'id' => 1,
                'product_name' => 'White Polo Shirt',
                'product_id' => 1,
                'price' => 670,
                'product_quantity' => 1,
            ],
            [
                'id' => 2,
                'product_name' => 'White Polo Shirt',
                'product_id' => 1,
                'price' => 670,
                'product_quantity' => 1,
            ],
            [
                'id' => 3,
                'product_name' => 'White Polo Shirt',
                'product_id' => 1,
                'price' => 670,
                'product_quantity' => 1,
            ],
            [
                'id' => 4,
                'product_name' => 'Straight Cut Slacks',
                'product_id' => 2,
                'price' => 1200,
                'product_quantity' => 1,
            ],
            [
                'id' => 5,
                'product_name' => 'Straight Cut Slacks',
                'product_id' => 2,
                'price' => 1200,
                'product_quantity' => 1,
            ],
            [
                'id' => 6,
                'product_name' => 'Black Denim Jacket',
                'product_id' => 3,
                'price' => 1500,
                'product_quantity' => 1,
            ],
           
        ];



        foreach ($sales as $sale) {
            Sale::create($sale);
        };
    }
}
