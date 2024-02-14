<?php

namespace Database\Seeders;

use App\Models\Inventory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $inventories = [
            [
                'id' => 1,
                'product_name' => 1,
                'product_id' => 1,
                'price' => 670,
                'quantity_on_hand' => 20,
                'quantity_to_be_received' => 50
            ],
            [
                'id' => 2,
                'product_name' => 2,
                'product_id' => 2,
                'price' => 1200,
                'quantity_on_hand' => 64,
                'quantity_to_be_received' => 50
            ],
            [
                'id' => 3,
                'product_name' => 3,
                'product_id' => 3,
                'price' => 1500,
                'quantity_on_hand' => 73,
                'quantity_to_be_received' => 50
            ],
           
        ];



        foreach ($inventories as $inventory) {
            Inventory::create($inventory);
        };
    }
}
