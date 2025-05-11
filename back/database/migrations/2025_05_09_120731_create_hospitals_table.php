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
        Schema::create('hospitals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('administrator_name')->nullable();
            $table->integer('number_of_departments')->nullable();
            $table->string('contact_info')->nullable();
            $table->string('address')->nullable();
            $table->integer('number_of_beds')->nullable();
            $table->string('specialized_services')->nullable();
            $table->boolean('connected_ehr_network')->default(false);
            $table->text('facilities')->nullable();
            $table->integer('annual_patient_count')->nullable();
            $table->integer('staff_count')->nullable();
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
        Schema::dropIfExists('hospitals');
    }
};
