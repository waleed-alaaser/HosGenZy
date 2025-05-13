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
        Schema::create('bills', function (Blueprint $table) {
            $table->id();
            $table->foreignId('appointment_id')->nullable()->constrained('appointments');
            $table->string('invoice_id')->unique()->nullable();
            $table->foreignId('patient_id')->constrained('patients');
            $table->decimal('doctor_fee', 8, 2)->nullable();
            $table->decimal('test_charges', 8, 2)->nullable();
            $table->decimal('medication_charges', 8, 2)->nullable();
            $table->decimal('insurance_coverage', 8, 2)->nullable();
            $table->decimal('total_amount', 8, 2)->nullable();
            $table->string('payment_status')->nullable();
            $table->dateTime('payment_date')->nullable();
            $table->string('payment_method')->nullable();
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
        Schema::dropIfExists('bills');
    }
};
