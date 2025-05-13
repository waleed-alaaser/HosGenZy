<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained('patients');
            $table->string('ehr_id')->nullable(); // Could be the same as patient's EHR ID or a separate one
            $table->text('doctor_notes')->nullable();
            $table->text('surgery_history')->nullable();
            $table->text('chronic_conditions')->nullable();
            $table->string('linked_hospital')->nullable();
            $table->text('vaccination_records')->nullable();
            $table->text('medication_history')->nullable();
            $table->text('allergy_information')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medical_records');
    }
};
