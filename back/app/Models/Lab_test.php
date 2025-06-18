<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lab_test extends Model
{
    use HasFactory;
    protected $fillable = ['patient_id', 'doctor_id' , 'lab_technician_id' ,'test_date' , 'test_name', 'test_results','cost' ];
    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
