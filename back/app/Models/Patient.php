<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Patient extends Model
{
    use HasFactory ;
    protected $fillable = ['name','gender', 'date_of_birth', 'email'];
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
