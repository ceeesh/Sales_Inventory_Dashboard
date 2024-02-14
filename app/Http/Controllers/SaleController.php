<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSaleRequest;
use App\Http\Requests\UpdateSaleRequest;
use App\Models\Sale;
use DB;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sales = Sale::all();
        return response()->json($sales);
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
    public function store(StoreSaleRequest $request)
    {
        // dd($request);
        Sale::create([
            'product_name' => $request->product_name,
            'product_quantity' => $request->product_quantity,
            'product_id' => $request->product_id,
            'price' => $request->price,
        ]);
        return response()->json('New Sale Added');
    }

    /**
     * Display the specified resource.
     */
    public function show(Sale $sale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSaleRequest $request, $sale_id)
    {
        // dd($sale_id);
        // DB::table('sales')->where('id', $sale_id)->update(['product_name' => '123']);
       Sale::where('id', '=', $sale_id)->first()->update(['product_name' => $request->product_name, 'product_quantity' => $request->product_quantity, 'product_id' => $request->product_id, 'price' => $request->price]);
        // dd($sale->product_name);
        // $sale->product_name = $request->product_name;
        // $sale->product_quantity = $request->product_quantity;
        // $sale->product_id = $request->product_id;
        // $sale->price = $request->price;
        // $sale->save();
       
        // $formFields = ([
        //     'product_name' => $request->product_name,
        //     'product_quantity' => $request->product_quantity,
        //     'product_id' => $request->product_id,
        //     'price' => $request->price,
        // ]);

        // $sale->update($formFields);

        return response()->json('Sale Info Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($sale_id)
    {
        // dd($sale_destroy);
        // $sale = Sale::where('id' = $sale_id);
        $sale = Sale::where('id', '=', $sale_id);
        $sale->delete();
        return response()->json('DELETED');
    }
}
