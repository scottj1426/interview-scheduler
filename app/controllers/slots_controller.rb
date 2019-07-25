module API
    class SlotsController < ApplicationController
      def index
        render json: Slots.all
      end
    end
  end