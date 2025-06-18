<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Doctor extends Model
{
    use HasFactory ;
    protected $fillable = ['name', 'gender', 'date_of_birth','email' , 'department'];
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
    public function prescripttion()
    {
        return $this->hasMany(Prescripttion::class);
    }
    public function lab_test()
    {
        return $this->hasMany(Lab_test::class);
    }
}
