<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\Patient;
use App\Models\Doctor;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $role = $request->role;
        $data = [
            'name' => $request->name,
            'email' => $request->email,
        ];
        $exist_in_doctors = DB::table('doctors')->where('email', $request->email)->exists();
        $exist_in_patients = DB::table('patients')->where('email', $request->email)->exists();
        $modyName = substr($request->name , 0, 8);
        if($exist_in_doctors || $exist_in_patients){
            return response()->json(data: [
                'name' => $request->name,
                'role' => 'email_exist'
            ]);
        }
        $idd=null;
        if ($role === 'doctor') {
            Doctor::create([
                'name' => $modyName,
                'gender' => $request->gender,
                'date_of_birth' => $request->dob,
                'email' => $request->email,
                'department' => $request->department
            ]);
            $idd = DB::table('doctors')->where('email', $request->email)->value('id');

        } elseif ($role === 'patient') {
            Patient::create([
                'name' => $modyName,
                'gender' => $request->gender,
                'date_of_birth' => $request->dob,
                'email' => $request->email,
                'department' => $request->department
            ]);
            $idd = DB::table('patients')->where('email', $request->email)->value('id');

        } else {
            return response()->json(['error' => 'Invalid role'], 400);
        }

        $token = Str::random(60);
        DB::table('auth_tokens')->insert([
            'token' => hash('sha256', $token),
            'email' => $request->email,
            'role' => $role,
        ]);
        return response()->json(['token' => $token, 'role' => $role, 'name' => $modyName, 'id'=>$idd]);
    }

    public function login(Request $request)
    {
        $email = $request->email;
        $name = '';
        $role = null;
        $idd=null;
        foreach (['admins', 'doctors', 'patients'] as $table) {
            if (DB::table($table)->where('email', $email)->exists()) {
                $name = DB::table($table)->where('email', $email)->value('name');
                $role = rtrim($table, 's');
                $idd = DB::table($table)->where('email', $email)->value('id');
                
                break;
            }
        }

        if (!$role) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        $token = hash('sha256',Str::random(60));
        DB::table('auth_tokens')->insert([
            'token' =>  $token,
            // 'token' => $token,
            'email' => $email,
            'role' => $role,
        ]);
        // $te = var_dump(hash('sha256', $token));
        return response()->json(['token' => $token,'role'=>$role ,'name' => $name , 'id'=>$idd]);
    }

    public function logout(Request $request)
    {
        $authHeader = $request->header('Authorization');
        if (!$authHeader) {
            return response()->json(['error' => 'No token'], 400);
        }
        $token = str_replace('Bearer ', '', $authHeader);
         DB::table('auth_tokens')->where('token',  $token)->delete();
        // $exist_in = DB::table('auth_tokens')->where('token', $token)->exists();

        // $test = var_dump($token);
        return response()->json(['message' => "logout"]);
        
    }
}
