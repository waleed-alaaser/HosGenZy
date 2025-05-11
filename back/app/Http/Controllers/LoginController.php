<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\Admin;

class LoginController extends Controller
{
    public function check(Request $request)
    {      
        // Validate and handle form data
        // response("waleed");
        
        $exists_in_doctors = DB::table('doctors')->where('email', $request->email)->exists();
        $exists_in_patients = DB::table('patients')->where('email', $request->email)->exists();
        $exists_in_admins = DB::table('admins')->where('email', $request->email)->exists();
        $who = 'hacker';
        $name = 'mohamed';
        if($exists_in_doctors){
            $who = 'doctor';
            $name = DB::table('doctors')->where('email', $request->email)->value('name');
        }else if($exists_in_patients){
            $who='patient';
            $name = DB::table('patients')->where('email', $request->email)->value('name');
        }else if($exists_in_admins){
            $who='admin';
            $name = DB::table('admins')->where('email', $request->email)->value('name');
        }
        return response()->json(data: [
            'name'=>$name,
            'role' => $who
        ]);
    }
}
