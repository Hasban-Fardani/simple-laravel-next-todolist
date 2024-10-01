<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TodoController extends Controller
{

    public function validate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'is_completed' => 'nullable|boolean',
            'description' => 'nullable|text',
        ]);

        if ($validator->fails()) {
            return abort(response()->json($validator->errors(), 400));
        }

        return $validator->validated();
    }

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
        $data = $this->validate($request);

        $todo = Todo::create($data);

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
        $data = $this->validate($request);

        $todo->update($data);

        return response()->json([
            'message' => 'success updated todo',
            'todo' => $todo
        ]);
    }

    /**
     * Remove the specified todolist from storage.
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();
        
        return response()->json([
            'message' => 'success deleted todo',
            'todo' => $todo
        ]);
    }

    public function check(Todo $todo)
    {
        $todo->update([
            'is_completed' => !$todo->is_completed
        ]);

        return response()->json([
            'message' => 'success updated todo',
            'todo' => $todo
        ]);
    }
}
