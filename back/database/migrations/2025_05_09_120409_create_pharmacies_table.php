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
        Schema::create('pharmacies', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('location')->nullable();
            $table->string('contact_info')->nullable();
            $table->string('operating_hours')->nullable();
            $table->text('available_medications')->nullable();
            $table->text('prescription_records')->nullable();
            $table->string('pharmacist_in_charge')->nullable(); // Could be a foreign key to pharmacists table
            $table->text('stock_replenishment_schedule')->nullable();
            $table->text('patient_interaction_records')->nullable();
            $table->text('medication_expiry_logs')->nullable();
            $table->text('linked_systems')->nullable();
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
        Schema::dropIfExists('pharmacies');
    }
};
