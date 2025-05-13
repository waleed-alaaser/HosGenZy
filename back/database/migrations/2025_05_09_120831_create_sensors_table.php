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
        Schema::create('sensors', function (Blueprint $table) {
            $table->id();
            $table->string('sensor_type')->nullable();
            $table->string('manufacturer_details')->nullable();
            $table->dateTime('installation_date')->nullable();
            $table->dateTime('last_maintenance_date')->nullable();
            $table->string('status')->nullable();
            $table->text('data_collected')->nullable();
            $table->string('connectivity')->nullable();
            $table->string('power_source')->nullable();
            $table->text('linked_systems')->nullable();
            $table->text('alert_logs')->nullable();
            $table->string('location')->nullable();
            $table->string('assigned_unit')->nullable();
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
        Schema::dropIfExists('sensors');
    }
};
