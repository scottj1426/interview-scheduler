module API
    class SlotsController < ApplicationController
      def index
        @slot = Slot.all
        render json: @slot.as_json
      end
    end
  end