module API
    class SlotsController < ApplicationController
      def create
        players = Intervew.create(interview_params)
        render json: players
      end

      private 
      def interview_params
      params.require(:interview).permit(:_name)
      end
    end
  end