<?php

namespace Database\Seeders;

use App\Models\Todo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $todos = [
            [
                'title' => 'Belajar dasar API',
                'is_completed' => true,
                'created_at' => now(),
            ],

            [
                'title' => 'Belajar dasar Routing API di Laravel',
                'is_completed' => true,
                'created_at' => now(),
            ],

            [
                'title' => 'Belajar dasar Routing di next js',
                'is_completed' => true,
                'created_at' => now(),
            ],

            [
                'title' => 'Belajar dasar CRUD menggunakan next dan laravel',
                'is_completed' => false,
                'created_at' => now(),
            ],

            [
                'title' => 'Belajar dasar Auth di laravel dan Next js',
                'is_completed' => false,
                'created_at' => now(),
            ],
        ];

        Todo::insert($todos);
    }
}
