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
        Schema::create('lab_tests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained('patients');
            $table->foreignId('doctor_id')->constrained('doctors');
            $table->foreignId('lab_technician_id')->nullable()->constrained('lab_technicians');
            $table->string('test_name');
            $table->string('test_type')->nullable();
            $table->dateTime('test_date')->nullable();
            $table->string('report_id')->nullable();
            $table->text('test_results')->nullable();
            $table->string('reference_range')->nullable();
            $table->string('lab_location')->nullable();
            $table->decimal('test_cost', 8, 2)->nullable();
            $table->string('equipment_used')->nullable();
            $table->dateTime('report_upload_date')->nullable();
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
        Schema::dropIfExists('lab_tests');
    }
};
