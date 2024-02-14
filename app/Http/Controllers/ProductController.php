<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
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
    public function store(StoreProductRequest $request)
    {
        Product::create([
            'product_name' => $request->product_name,
            'category_name' => 'first',
            'stock' => $request->stock,
            'price' => $request->price,
            'quantity_sold' => 0,
        ]);
        return response()->json("New Product Added");
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, $product_id)
    {
        // dd($request);
        Product::where('id', '=', $product_id)->first()->update(['product_name' => $request->product_name, 'price' => $request->price, 'stock' => $request->stock]);

        return response()->json('Product Info Update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($product_id)
    {
        // dd($sale_destroy);
        // $sale = Sale::where('id' = $sale_id);
        $product = Product::where('id', '=', $product_id);
        $product->delete();
        return response()->json('Product Deleted');
    }
}
