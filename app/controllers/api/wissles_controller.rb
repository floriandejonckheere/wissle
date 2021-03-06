# frozen_string_literal: true

module Api
  class WisslesController < ApiController
    before_action :authenticate!

    # GET /wissles
    def index
      @resources = Wissle.all

      render :index
    end

    # POST /
    def create
      @resource = Wissle.new wissle_params.merge(:user_id => current_user.id)
                                          .merge(:category => Category.find_by(:title => wissle_params[:category]))

      if @resource.save
        render :show, :status => :created
      else
        render :show, :status => :unprocessable_entity
      end
    end

    # GET /:id
    def show
      @resource = Wissle.find params[:id]

      render :show
    end

    # post /:id
    def destroy
      @resource = Wissle.find params[:id]

      # Allow current_user only to update his/her own wissles
      return head :forbidden unless @resource&.user == current_user
      @resource.destroy!

      head :no_content
    end

    private

    def wissle_params
      params.require(:data).permit :user_id,
                                   :text,
                                   :longitude,
                                   :latitude,
                                   :category
    end
  end
end
