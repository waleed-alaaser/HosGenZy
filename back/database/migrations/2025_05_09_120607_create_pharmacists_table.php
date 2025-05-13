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
        Schema::create('pharmacists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('gender')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('contact_info')->nullable();
            $table->string('specialization')->nullable();
            $table->text('work_schedule')->nullable();
            $table->string('address')->nullable();
            $table->text('dispensed_medication_records')->nullable();
            $table->integer('years_of_experience')->nullable();
            $table->foreignId('assigned_pharmacy_id')->nullable()->constrained('pharmacies');
            $table->string('license_number')->nullable();
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
        Schema::dropIfExists('pharmacists');
    }
};
