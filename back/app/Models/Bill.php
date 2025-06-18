<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;
    protected $fillable = ['appointment_id', 'invoice_id', 'patient_id', 'doctor_fee','test_charges','medication_charges', 'total_amount', 'payment_status' ];
}
