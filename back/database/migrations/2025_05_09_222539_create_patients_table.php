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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('gender')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->text('payment_records')->nullable();
            $table->string('insurance_details')->nullable();
            $table->text('medical_history')->nullable();
            $table->text('heart_rate')->nullable();
            $table->text('blood_pressure')->nullable();
            $table->text('temperature')->nullable();
            $table->text('oxygen_saturation')->nullable();
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
        Schema::dropIfExists('patients');
    }
};
