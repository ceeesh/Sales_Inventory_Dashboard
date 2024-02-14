<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $projects = [
            [
                'id' => 1,
                'project_name' => 'Basic',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'In Progress',
                'user_id' => 1,
                'uv' => 7000,
                'pv' => 1000,
                'amt' => 1450
            ],
            [
                'id' => 2,
                'project_name' => 'Intersellar',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'Completed',
                'user_id' => 1,
                'uv' => 3700,
                'pv' => 7203,
                'amt' => 4321
            ],
            [
                'id' => 3,
                'project_name' => 'Inception',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'In Progress',
                'user_id' => 1,
                'uv' => 5500,
                'pv' => 2020,
                'amt' => 1403
            ],
            [
                'id' => 4,
                'project_name' => 'Memento',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'Completed',
                'user_id' => 1,
                'uv' => 9521,
                'pv' => 6823,
                'amt' => 1200
            ],
            [
                'id' => 5,
                'project_name' => 'Tenet',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'In Progress',
                'user_id' => 1,
                'uv' => 5000,
                'pv' => 1000,
                'amt' => 9000
            ],
            [
                'id' => 6,
                'project_name' => 'Dunkirk',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'In Progress',
                'user_id' => 1,
                'uv' => 5128,
                'pv' => 9123,
                'amt' => 5400
            ],
            [
                'id' => 7,
                'project_name' => 'Good Will Hunting',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'In Progress',
                'user_id' => 1,
                'uv' => 7600,
                'pv' => 1530,
                'amt' => 8705
            ],
            [
                'id' => 8,
                'project_name' => 'Fight Club',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'Completed',
                'user_id' => 1,
                'uv' => 4520,
                'pv' => 9123,
                'amt' => 5239
            ],
            [
                'id' => 9,
                'project_name' => 'Gone Girl',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'In Progress',
                'user_id' => 1,
                'uv' => 9123,
                'pv' => 4332,
                'amt' => 8654
            ],
            [
                'id' => 10,
                'project_name' => 'Hitch',
                'project_description' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'project_status' => 'Completed',
                'user_id' => 1,
                'uv' => 5400,
                'pv' => 5240,
                'amt' => 1240
            ],

        ];

      

        foreach ($projects as $project) {
            Project::create($project);
        };
    }
}
