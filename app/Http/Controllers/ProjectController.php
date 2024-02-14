<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects);
    }

    public function inProgressProjects()
    {
        $projects = Project::all();
        $inProgessProjects = Project::where('project_status', '=', 'In Progress')->get();
        $inProgress = ($inProgessProjects->count() / $projects->count()) * 100;
        return response()->json($inProgress);
    }

    public function completedProjects()
    {
        $projects = Project::all();
        $completedProjects = Project::where('project_status', '=', 'Completed')->get();
        $completed = ($completedProjects->count() / $projects->count()) * 100;
        return response()->json($completed);
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
    public function store(StoreProjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
