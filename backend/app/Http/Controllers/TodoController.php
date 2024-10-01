<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::all();

        return response()->json([
            'message' => 'success retrieved all todos',
            'todos' => $todos
        ]);
    }

    /**
     * Store a newly created todolist in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $todo = Todo::create($validator->validated());

        return response()->json([
            'message' => 'success created new todo',
            'todo' => $todo
        ], 201);
    }

    /**
     * Display the specified todolist.
     */
    public function show(Todo $todo)
    {
        return response()->json([
            'message' => 'success retrieved todo',
            'todo' => $todo
        ]);
    }

    /**
     * Update the specified todolist in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        //
    }

    /**
     * Remove the specified todolist from storage.
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
