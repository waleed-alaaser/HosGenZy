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
        Schema::create('lab_technicians', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('gender')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('contact_info')->nullable();
            $table->string('qualification')->nullable();
            $table->string('address')->nullable();
            $table->text('work_schedule')->nullable();
            $table->integer('years_of_experience')->nullable();
            $table->string('assigned_lab')->nullable();
            $table->text('tests_conducted')->nullable();
            $table->text('test_results_uploaded')->nullable();
            $table->text('equipment_proficiency')->nullable();
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
        Schema::dropIfExists('lab_technicians');
    }
};
