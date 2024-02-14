<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'id' => 1,
                'email' => 'ceejay@email.com',
                'name' => 'Cee Jay',
                'password' => "12345678",
                'city' => 'New York',
                'status' => 'In Progress',
                'occupation' => 'Web Developer',
            ],
            [
                'id' => 2,
                'email' => 'ross@email.com',
                'name' => 'Ross Geller',
                'password' => "12345678",
                'city' => 'New York',
                'status' => 'In Progress',
                'occupation' => 'Paleontologist',
            ],
            [
                'id' => 3,
                'email' => 'monica@email.com',
                'name' => 'Monica Geller',
                'password' => "12345678",
                'city' => 'New York',
                'status' => 'Completed',
                'occupation' => 'Head Chef',
            ],
            [
                'id' => 4,
                'email' => 'chandler@email.com',
                'name' => 'Chandler Bing',
                'password' => "12345678",
                'city' => 'Chicago',
                'status' => 'On Hold',
                'occupation' => 'Data Analyst',
            ],
            [
                'id' => 5,
                'email' => 'joey@email.com',
                'name' => 'Joey Tribbiani',
                'password' => "12345678",
                'city' => 'London',
                'status' => 'In Progress',
                'occupation' => 'Actor',
            ],
            [
                'id' => 6,
                'email' => 'rachel@email.com',
                'name' => 'Rachel Green',
                'password' => "12345678",
                'city' => 'Atlanta',
                'status' => 'Completed',
                'occupation' => 'Fashion Designer',
            ],
            [
                'id' => 7,
                'email' => 'phoebe@email.com',
                'name' => 'Phoebe Buffay',
                'password' => "12345678",
                'city' => 'New York',
                'status' => 'In Progress',
                'occupation' => 'Masseuse',
            ],
        ];

      

        foreach ($users as $user) {
            User::create($user);
        };
    }
}
