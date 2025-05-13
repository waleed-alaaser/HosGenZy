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
        Schema::create('prescripttions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained('patients');
            $table->foreignId('doctor_id')->constrained('doctors');
            $table->foreignId('pharmacist_id')->nullable()->constrained('pharmacists');
            $table->dateTime('date_issued')->nullable();
            $table->string('medications')->nullable();
            $table->string('dosage')->nullable();
            $table->string('duration')->nullable();
            $table->text('instructions')->nullable();
            $table->text('allergy_warnings')->nullable();
            $table->string('linked_diagnosis')->nullable();
            $table->string('fulfillment_status')->nullable();
            $table->decimal('cost', 8, 2)->nullable();
            $table->string('blockchain_id')->nullable();
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
        Schema::dropIfExists('prescripttions');
    }
};
